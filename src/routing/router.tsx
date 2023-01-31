import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RootLayout from 'routing/RootLayout'

import Home from 'views/Home'
import MathSetup from 'views/Home/Math/MathSetup'
import MathTest from 'views/Home/Math/MathTest'
import MathLayout from 'routing/MathLayout'
import EnglishLayout from 'routing/EnglishLayout'
import EnglishSetup from 'views/Home/English/EnglishSetup'
import EnglishTest from 'views/Home/English/EnglishTest'
import Results from 'views/Home/Results'
import { basicOperations } from 'types/mathTypes'
import { enTopics } from 'types/enTypes'

const mathTestRouts = basicOperations.map((operation, index) => {
    return <Route key={index} path={operation.path} element={<MathTest />} />
})

const enTestRouts = enTopics.map((topic, index) => {
    return <Route key={index} path={topic.path} element={<EnglishTest />} />
})

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='matematyka' element={<MathLayout />}>
                <Route index element={<MathSetup />} />
                {mathTestRouts}
            </Route>
            <Route path='angielski' element={<EnglishLayout />}>
                <Route index element={<EnglishSetup />} />
                {enTestRouts}
            </Route>
            <Route path='wyniki' element={<Results />} />
        </Route>
    )
)

export default router
