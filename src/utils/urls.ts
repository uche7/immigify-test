
/** General Page Unauthenticated Routes or URL Page Links */
const GeneralNonAuthRoutes = {
	home: "/",
    EligibilityAgent: "/",
    DocumentAgent: "/",
    FormFillingAgent: "/",
    InterviewPrepAgent: "/",
    Subscription: "/",
    History: "/",
    Settings: "/",

};

/** General Page Authenticated Routes or URL Page Links */
const GeneralAuthRoutes = {
	addUser: "/profile",
};

const protectedRoutes = [
	...Object.values(GeneralAuthRoutes),
];

export {
	GeneralNonAuthRoutes,
	GeneralAuthRoutes,
	protectedRoutes,
};
