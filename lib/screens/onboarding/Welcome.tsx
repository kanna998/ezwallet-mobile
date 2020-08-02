import * as React from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Screen, Container, Button, Text, Images, Theme } from '@kancha'
import SCREENS from '../Screens'
import { Navigation } from 'react-native-navigation'

import { track } from 'uPortMobile/lib/actions/metricActions'
import { segmentId } from 'uPortMobile/lib/selectors/identities'

import TESTID from 'uPortMobile/lib/e2e/testIDs'

interface WelcomeProps {
  trackSegment: (event: any) => any
  componentId: string
}

class Welcome extends React.Component<WelcomeProps> {
  componentDidMount() {
    this.props.trackSegment('Start')
  }

  render() {
    return (
      <Screen
        backgroundImage={Images.backgrounds.greenbackground}
        type={Screen.Types.Custom}
        config={Screen.Config.SafeNoScroll}
        statusBarHidden>
        <Container flex={1}>
          <Container flex={1} justifyContent={'space-around'} alignItems={'center'} paddingTop={50}>
            <Image source={Images.branding.homeLogo} style={{ height: 200 }} resizeMode={'contain'} />
            <Text type={Text.Types.H3} textColor={'white'} bold textAlign={'center'}>
            Safely store and share your verifiable credentials.
            </Text>
          </Container>
          <Container flex={1} paddingTop alignItems={'center'}>
            <Container w={300}>
              <Button
                testID={TESTID.ONBOARDING_GET_STARTED}
                bold
                fullWidth
                buttonText={'Get Started'}
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: SCREENS.Learn,
                      options: {
                        topBar: {
                          elevation: 0,
                        },
                      },
                    },
                  })
                }
                type={Button.Types.Custom}
                block={Button.Block.Filled}
              />
            </Container>
          </Container>
        </Container>
      </Screen>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ...ownProps,
    segmentId: segmentId(state),
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    trackSegment: (event: any) => {
      dispatch(track(`Onboarding ${event}`))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome)
