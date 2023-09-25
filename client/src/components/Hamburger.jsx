import {HomeButton, ProjectButton, ExpenseButton, AnalyticsButton, InsuranceButton, SettingButton} from "./HamButtons"

export const Hamburger = () => {
  return (
    
    <>
      <div className='aligning' style={{ justifyContent: 'center' }}>
          <div className='left' style={{display: 'flex', flexDirection: 'column'}}>
              <HomeButton/>
              <ProjectButton />
              <ExpenseButton />
              <AnalyticsButton />
              <InsuranceButton />
              <SettingButton />
            </div>
      </div>
    </>
    
  )
}
