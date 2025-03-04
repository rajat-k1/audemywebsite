<script setup>
import { ref, onMounted } from "vue";
import { GoogleLogin } from "vue3-google-login";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
const errors = ref(false);
const email = ref("");
const password = ref("");
const authKey = ref("");
const userSession = ref(null);
const router = useRouter();
//OAUTH
const userProfile = ref(null);
onMounted(() => {
    const session = localStorage.getItem("audemyUserSession");
    if (session) {
        userSession.value = JSON.parse(session);
    }
});
const login = (event) => {
    event.preventDefault();
    errors.value = false;
    if (!email.value || !password.value) {
        errors.value = true;
        resetErrors();
        return;
    }
    // Send login req data as JSON
    fetch("https://audemy-users-api.fly.dev/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                email: email.value,
                password: password.value,
            },
        }),
    })
        .then((response) => {
            response.json();
            //This is where the auth key is saved for future API calls
            //We should think about saving it in a more central location using Vuex library
            authKey = response.headers.get("authorization");
        })
        .then((data) => {
            console.log("Success:", data);
            localStorage.setItem(
                "audemyUserSession",
                JSON.stringify({ token: authKey.value, user: data.user })
            );
            userSession.value = { token: authKey.value, user: data.user };
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
const resetErrors = () => {
    setTimeout(() => {
        errors.value = false;
    }, 4000);
};
//**** OAUTH
// const router = useRouter();
// const callback = (response) => {
//     // This callback will be triggered when the user selects or login to
//     // his Google account from the popup
//     console.log("Handle the response", response);
// };
const callback = async (response) => {
    // console.log("Google OAuth response:", response);
    // Check if we received a credential (JWT)
    if (response?.credential) {
        try {
            // Decode the JWT to extract profile info
            const decoded = jwtDecode(response.credential);
            // console.log("Decoded JWT:", decoded);
            // Extract user profile information from decoded JWT
            userProfile.value = {
                name: decoded.name,
                email: decoded.email,
                imageUrl: decoded.picture, // Profile picture URL
            };
        } catch (error) {
            console.error("Failed to decode JWT:", error);
        }
    }
    console.log("Making API call with username:", userProfile.value.email);
    const dbResponse = await fetch(
        `/api/db/get_user?email=${userProfile.value.email}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const dbData = await dbResponse.json();
    console.log("DB Response:", dbData);

    // If user does not exist, create/update with a dummy school field
    if (!dbData || !dbData.email) {
        console.log("User not found, creating user with dummy school...");
        await fetch(`/api/db/update_user_school`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userProfile.value.email,
                name: userProfile.value.name,
                school: "Unknown School", // Dummy school
            }),
        });
    }

    // Session store
    localStorage.setItem("audemyUserSession", JSON.stringify(response));
    userSession.value = response;
    console.log("User logged in");
    router.push("/game-zone");
};
const logout = () => {
    localStorage.removeItem("audemyUserSession");
    userSession.value = null;
    console.log("User logged out");
    router.push("/login");
};
</script>
<template>
    <div
        class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
    >
        <div
            class="w-5/12 md:w-full sm:w-full relative flex items-center jusitfy-center"
        >
            <div
                class="w-full flex flex-col justify-center items-center gap-14 z-10"
            >
                <img
                    src="/assets/images/LoginImg/icons.svg"
                    alt="logo icon"
                    class="w-[50%] h-[50%]"
                />
                <img
                    src="/assets/images/LoginImg/logo-icon.svg"
                    alt="logo icon"
                    class="w-[45%] h-[45%]"
                />
            </div>
            <img
                src="/assets/images/LoginImg/wave-icon.svg"
                alt="wave icon"
                class="absolute -bottom-[15%] right-0 w-full -z-1"
            />
        </div>
        <!-- Show login form if not logged in -->
        <div
            v-if="!userSession"
            class="w-7/12 md:w-full sm:w-full bg-white flex items-center justify-center"
        >
            <form
                @submit="login"
                method="post"
                class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%]"
            >
                <h1
                    class="text-[36px] text-[#151E22] text-center w-7/12 mobile:w-full mobile:text-[24px] mobile:mb-4"
                >
                    Hi there, welcome back!
                </h1>
                <div class="w-[70%] max-w-[450px]">
                    <div class="mt-8 mb-3" v-if="errors">
                        <div
                            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            <span class="block sm:inline text-center"
                                >Invalid email and password combination. Try
                                again!</span
                            >
                        </div>
                    </div>
                    <div class="mb-[16px]">
                        <label
                            class="block text-[#0C0D0D] mb-1 font-semiBold"
                            for="email"
                            >Email Address</label
                        >
                        <input
                            v-model="email"
                            type="email"
                            class="w-full outline-none border-2 border-black py-2 px-2 rounded-[8px]"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            autocomplete="email"
                        />
                    </div>
                    <div class="mb-[16px]">
                        <label
                            for="password"
                            class="block text-[#0C0D0D] mb-1 font-semiBold"
                            >Password</label
                        >
                        <input
                            v-model="password"
                            type="password"
                            class="w-full outline-none border-2 border-black py-2 px-2 rounded-[8px]"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div
                        class="flex justify-end w-full mobile:items-center mobile:text-center mobile:justify-center"
                    >
                        <a href="" class="underline text-[#087BB4] font-medium"
                            >Forgot password?</a
                        >
                    </div>
                    <div
                        class="flex justify-start w-full mobile:items-center mobile:text-center mobile:justify-center mobile:pt-4"
                    >
                        <h5>
                            New to Audemy?
                            <a
                                href="./signup"
                                class="underline text-[#087BB4] font-medium"
                                >Sign Up</a
                            >
                        </h5>
                    </div>
                    <div class="flex justify-center w-full pt-4">
                        <button
                            type="submit"
                            class="w-full py-3 font-bold rounded-[8px]"
                            :class="
                                errors
                                    ? 'bg-[#747575] text-white'
                                    : 'bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black'
                            "
                            :disabled="errors"
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </form>
            <!-- Google OAuth Login -->
            <div class="flex flex-col items-center justify-center gap-4 mt-8">
                <GoogleLogin :callback="callback" />
            </div>
        </div>
        <!-- Show logout button if logged in -->
        <!-- Show user profile and logout button if logged in -->
        <div
            v-else
            class="w-7/12 md:w-full sm:w-full bg-white flex items-center justify-center flex-col gap-4 mt-8"
        >
            <div class="text-center">
                <img
                    v-if="userProfile?.imageUrl"
                    :src="userProfile.imageUrl"
                    alt="User Photo"
                    class="rounded-full w-[80px] h-[80px] object-cover"
                />
                <h3 class="text-2xl mt-4">{{ userProfile?.name }}</h3>
                <p class="text-lg">{{ userProfile?.email }}</p>
            </div>
            <button
                @click="logout"
                class="bg-red-500 text-white py-2 px-4 rounded mt-6"
            >
                Log Out
            </button>
        </div>
    </div>
</template>
