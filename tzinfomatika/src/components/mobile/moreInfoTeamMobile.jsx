export const MoreInfoTeamMobile = ({activeSlideIndex, teamOne, teamTwo}) => {
  return (
      <>
        <div className={activeSlideIndex || activeSlideIndex === 0 ? 'm_swiper_team_one_active' : 'm_swiper_team_disable'}>{teamOne}</div>
        <div className={activeSlideIndex || activeSlideIndex === 0 ? 'm_swiper_team_two_active' : 'm_swiper_team_disable'}>{teamTwo}</div>
      </>
  )
}