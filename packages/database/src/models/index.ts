export enum ROLES_ENUM {
    'owner' = 1, // صاحب کسب و کار
    'master' = 2, // استادکار
    'secretary' = 3, // منشی
    'personel' = 4, // پرسنل عادی
    'manager' = 5, //  مدیر
}
export enum STATUS_ENUM {
    'canceled' = 1,
    'completed' = 2,
    'scheduled' = 3,
    'active' = 4,
    'suspended' = 5,
    'pending' = 6,
    'failed' = 7,
    'draft' = 8,
    'sent' = 9,
}

export enum CONSULTATION_STATUS_ENUM {
    ONLINE = 1,
    OFFLINE = 2,
}

export enum POSITIONS_ENUM {
    'HEADER' = 1,
    'SIDEBAR' = 2,
    'FOOTER' = 3,
    'POPUP' = 4,
}

export enum BROADCAST_MESSAGE_ENUM {
    'notification' = 1,
    'email' = 2,
    'sms' = 3,
}

export enum SHIFTS_ENUM {
    'morning' = 1,
    'evening' = 2,
    'night' = 3,
}

export enum CATEGORY_IMAGE_ENUM {
    'SLIDER' = 1,
    'GALLERY' = 2,
}

export enum BUSINESS_TYPE_ENUM {
    WOMEN_SALON = 1,
    CONSULTING = 2,
    MEN_SALON = 3,
}
export enum MembershipRequestType {
    REQUEST = 'REQUEST',
    INVITE = 'INVITE',
}

export enum MembershipRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    CANCELED = 'canceled',
    EXPIRED = 'expired',
}
export enum NotificationType {
    USER_REQUEST = 'USER_REQUEST',
    BUSINESS_INVITE = 'BUSINESS_INVITE',
}

export enum EntityType {
    USER = 'USER',
    BUSINESS = 'BUSINESS',
    SYSTEM = 'SYSTEM',
}

export enum ReferenceType {
    MEMBERSHIP_REQUEST = 'MEMBERSHIP_REQUEST',
    MEMBERSHIP_INVITE = 'MEMBERSHIP_INVITE',
}
