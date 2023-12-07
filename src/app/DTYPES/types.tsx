export type trainClassandPriceType = {
    class: string
    price?: string
    status?: string
    cnfProbability?: string
}

export type CREDTrainListDataType = {
    trainNumber: string
    trainName: string
    trainRunsOn: string
    trainType: string
    trainSourceRunningStatus: {
        trainSource: string;
        trainSourceTime: string
        trainSourceDate: string
    }
    journeyDuration: string;
    trainDestinationRunningStatus: {
        trainDestination: string
        trainDestinationTime: string
        trainDestinationDate: string
    }
    trainClassandPrice: Array<trainClassandPriceType>

}

export type TrainClassDetails = {
    trainStatus: ({
        trainTiming: string;
        currentStatus: string;
        confirmProbability: string;
    } | {
        trainTiming?: undefined;
        currentStatus?: undefined;
        confirmProbability?: undefined;
    })[];
}[]
