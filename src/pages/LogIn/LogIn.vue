<script setup>
import { ref, onMounted } from "vue";
import { GoogleLogin } from "vue3-google-login";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";

const errors = ref(false);
const email = ref("");
const password = ref("");
var authKey = ref("");
const userSession = ref(null);
const userProfile = ref(null);
const school = ref(""); // Store school input
const showSchoolForm = ref(false); // Control form visibility
const router = useRouter();

onMounted(() => {
    const session = localStorage.getItem("audemyUserSession");
    if (session) {
        userSession.value = JSON.parse(session);
    }
});

const login = async (event) => {
    event.preventDefault();
    errors.value = false;
    if (!email.value || !password.value) {
        errors.value = true;
        resetErrors();
        return;
    }

    try {
        const response = await fetch("https://audemy-users-api.fly.dev/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: { email: email.value, password: password.value },
            }),
        });

        const data = await response.json();
        authKey.value = response.headers.get("authorization");

        localStorage.setItem(
            "audemyUserSession",
            JSON.stringify({ token: authKey.value, user: data.user })
        );
        userSession.value = { token: authKey.value, user: data.user };
    } catch (error) {
        console.error("Error:", error);
    }
};

const callback = async (response) => {
    if (response?.credential) {
        try {
            const decoded = jwtDecode(response.credential);
            userProfile.value = {
                name: decoded.name,
                email: decoded.email,
                imageUrl: decoded.picture,
            };
        } catch (error) {
            console.error("Failed to decode JWT:", error);
        }
    }

    const dbResponse = await fetch(
        `/api/db/get_user?email=${userProfile.value.email}`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    );

    const dbData = await dbResponse.json();
    console.log("DB Response:", dbData);

    if (!dbData || !dbData.email) {
        console.log("User not found, prompting for school...");
        showSchoolForm.value = true;
    } else {
        localStorage.setItem("audemyUserSession", JSON.stringify(response));
        userSession.value = response;
        router.push("/game-zone");
    }
};

const updateSchool = async () => {
    if (!school.value) {
        alert("Please enter your school name.");
        return;
    }

    try {
        const response = await fetch(`/api/db/update_user_school`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: userProfile.value.email,
                name: userProfile.value.name,
                school: school.value,
            }),
        });

        const data = await response.json();
        console.log("Updated user:", data);

        if (data.success) {
            localStorage.setItem(
                "audemyUserSession",
                JSON.stringify(userProfile.value)
            );
            userSession.value = userProfile.value;
            showSchoolForm.value = false;
            router.push("/game-zone");
        }
    } catch (error) {
        console.error("Error updating school:", error);
    }
};

const logout = () => {
    localStorage.removeItem("audemyUserSession");
    userSession.value = null;
    userProfile.value = null;
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
            <button
                v-if="userSession"
                @click="logout"
                class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>

        <!-- Show login form if not logged in -->
        <div
            v-if="!userSession && !showSchoolForm"
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
                    <div class="flex justify-end w-full">
                        <a href="#" class="underline text-[#087BB4] font-medium"
                            >Forgot password?</a
                        >
                    </div>
                    <div class="flex justify-start w-full">
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
                            class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
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

        <!-- Show school input if needed -->
        <div
            v-if="showSchoolForm"
            class="w-7/12 bg-white flex items-center justify-center flex-col gap-4"
        >
            <h3>Enter Your School</h3>
            <input
                v-model="school"
                type="text"
                class="border-2 border-black py-2 px-2 rounded-[8px]"
                placeholder="School Name"
            />
            <button
                @click="updateSchool"
                class="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
                Submit
            </button>
        </div>
    </div>
</template>
