export interface SideBarItem {
    path: string;
    title: string;
    icon: React.ReactNode;
}

export interface IActiveLink {
    url: string;
    children: React.ReactNode;
}

export interface ICreateUserParams {
    clerkId: string;
    username: string;
    email: string;
    avatar?: string;
    name?: string;
}
