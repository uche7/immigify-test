
/** General Page Unauthenticated Routes or URL Page Links */
const GeneralNonAuthRoutes = {
	home: "/home",
    EligibilityAgent: "/eligibility-agent",
    DocumentAgent: "/document-agent",
    FormFillingAgent: "/form-filling-agent",
    InterviewPrepAgent: "/interview-prep-agent",
    Subscription: "/subscription",
    History: "/history",
    Settings: "/settings",

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
