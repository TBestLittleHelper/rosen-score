type TrophyForColor = {
    color: 'w' | 'b'
    onMoveNumber?: number
    firstPieceMove?: number
}

export type TrophyCheckResult = TrophyForColor[]

export type TrophyCacheFile = {
    cache_updated_at: number
    games_analyzed: number
    moves_analyzed: number
    trophies: PlayerTrophiesByType
}

export type PlayerTrophiesByType = {
    [key: string]: TrophyForGame
}

export type TrophyForGame = {
    [key: string]: {
        date: string
        opponent: {
            username: string
            title: string
        }
        link: string
    }
}

export type ReportSource = 'lichess'
