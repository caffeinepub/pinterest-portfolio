import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ReferralLink {
    id: bigint;
    title: string;
    description: string;
    targetUrl: string;
    clickCount: bigint;
    thumbnailPath: string;
    category: string;
}
export interface backendInterface {
    getAllReferralLinks(): Promise<Array<ReferralLink>>;
    getReferralLinkById(id: bigint): Promise<ReferralLink | null>;
    redirectAndTrackClick(id: bigint): Promise<string>;
    submitContact(name: string, email: string, message: string): Promise<void>;
}
