type CardStudySpace = {
    cardTitle: string,
    cardDescription: string,
    creationDate: string,
    fileName: string,
    numPage: number,
    color: string,
    id: string,
    user: string
};

type MessageChat = {
    message: string,
    ofUser: boolean,
    id: string
};

export type { CardStudySpace, MessageChat };