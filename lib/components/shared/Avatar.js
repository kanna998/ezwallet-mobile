// Copyright (C) 2018 ConsenSys AG
//
// This file is part of uPort Mobile App.
//
// uPort Mobile App is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// uPort Mobile App is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with uPort Mobile App.  If not, see <http://www.gnu.org/licenses/>.
//
// Frameworks
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, ImageBackground } from 'react-native'

// Utilities
import { getInitials } from 'uPortMobile/lib/utilities/getInitials'

// Styles
import { font, colors } from 'uPortMobile/lib/styles/globalStyles'
import { getImagePath } from 'uPortMobile/lib/utilities/credentialUtils'

// Constants
const anon = require('uPortMobile/assets/images/default_profile_image.png')
const defaultSize = 60
const borderRadius = 50

const styles = {
  avatar: {
    borderRadius: defaultSize / 2,
    width: defaultSize,
    height: defaultSize,
  },
  initialContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontFamily: font,
    fontSize: defaultSize / 4,
    textAlign: 'center',
  },
  wrapper: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const avatarSize = props => {
  const size = props.size || defaultSize
  return {
    ...styles.avatar,
    borderRadius: size / 2,
    width: size,
    height: size,
  }
}

const avatarBorder = props => {
  const size = props.size || defaultSize
  return {
    borderRadius: size / 2,
    width: size,
    height: size,
  }
}

// Components
const ImageReplacement = props => (
  <View
    style={[
      styles.initialContainer,
      avatarSize(props),
      { backgroundColor: colors.white216 },
      { padding: (props.size || defaultSize) / 4 },
    ]}
  >
    <Text style={[styles.initials, props.initialsStyle, { fontSize: (props.size || defaultSize) / 3 }]}>
      {props.text}
    </Text>
  </View>
)

const Thumbnail = props => (
  <View style={[styles.wrapper, avatarBorder(props)]}>
    <Image
      resizeMode='cover'
      source={props.source}
      style={[avatarSize(props), { position: 'absolute' }, props.style]}
    />
    {props.children}
  </View>
)

const Avatar = props => {
  console.log(props);
  return (
    <View>
      {props.source ? (
        props.source.avatar ? (
          <Thumbnail
            size={props.size || defaultSize}
            borderColor={props.borderColor}
            borderWidth={props.borderWidth}
            source={props.source.avatar}
            style={[avatarSize(props), props.style]}
          >
            {props.children}
          </Thumbnail>
        ) : props.source.uri ? (
          <Thumbnail
            size={props.size || defaultSize}
            source={props.source}
            borderColor={props.borderColor}
            borderWidth={props.borderWidth}
            style={[avatarSize(props), props.style]}
          >
            {props.children}
          </Thumbnail>
        ) : props.source.name && !props.source.name.startsWith('did:') ? (
          <ImageReplacement
            initialsStyle={props.initialsStyle}
            size={props.size}
            text={getInitials(props.source.name)}
          />
        ) : (
          <Thumbnail
            size={props.size || defaultSize}
            source={getImagePath(props.claimType)}
            borderColor={props.borderColor}
            borderWidth={props.borderWidth}
            style={[avatarSize(props), props.style]}
          >
            {props.children}
          </Thumbnail>
        )
      ) : (
        <Thumbnail
          size={props.size || defaultSize}
          source={anon}
          borderColor={props.borderColor}
          borderWidth={props.borderWidth}
          style={[avatarSize(props), props.style]}
        />
      )}
    </View>
  )
}

Avatar.propTypes = {
  size: PropTypes.number,
  source: PropTypes.object,
  style: PropTypes.any,
  claimType: PropTypes.string
}

export default Avatar
