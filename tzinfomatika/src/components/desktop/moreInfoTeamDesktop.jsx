export const MoreInfoTeamDesktop =  ({activeSlideIndex,teamOne,teamTwo}) => {
    return (
        <>
            <div className={activeSlideIndex || activeSlideIndex === 0 ? 'swiper_team_one_active' : 'swiper_team_disable'}>{teamOne}</div>
            <div className={activeSlideIndex || activeSlideIndex === 0  ? 'swiper_team_two_active' : 'swiper_team_disable'}>{teamTwo}</div>
        </>
    )
}