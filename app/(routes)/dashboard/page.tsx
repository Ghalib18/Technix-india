import { UserButton } from '@clerk/nextjs'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import FeatureList from './_components/FeatureList'

function Dashboard() {
    return (
         
        <div>
            {/*Welcome Banner */}
            <WelcomeBanner/>
            {/*Feature list*/}
            <FeatureList/>
        </div>
    ) 
}

export default Dashboard