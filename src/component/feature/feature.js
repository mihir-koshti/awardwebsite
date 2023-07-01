import { Banner1, Banner2 } from '@/asset'
import MyImage from '@/common/image/image'
import React from 'react'
import { FeatureStyled } from './FeatureStyled'

const Feature = () => {
    return (
        <FeatureStyled>
            <div className='my-5 '>
                <MyImage src={Banner1.src} alt={'banner 2'} classname='bannerImage' />
                <div className='my-5'>

                    <div>An inspiring event for the digital design community</div>
                    <strong>

                        Early Bird Tickets on sale for a limited time, grab yours here!
                    </strong>
                </div>
            </div>
        </FeatureStyled>
    )
}

export default Feature