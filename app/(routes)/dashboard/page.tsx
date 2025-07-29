import { UserButton } from '@clerk/nextjs'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import FeatureList from './_components/FeatureList'

function Dashboard() {
    return (
         
        <div>
            {/*Welcome Banner */}
           {/*Added this for temporary use so that we can logout esaily */}
            <UserButton/>
            <WelcomeBanner/>
            {/*Feature list*/}
            <FeatureList/>
        </div>
    ) 
}

export default Dashboard
