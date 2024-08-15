import { View, Text } from 'react-native'
import React from 'react'
import { HomeIcon } from '../svg/Home'
import { HomeFilled } from '../svg/HomeFilled'
import { IconName } from '@/types'
import { CircleFilled } from '../svg/CircleFilled'
import { CircleIcon } from '../svg/Circle'
import { MessageFilled } from '../svg/MessageFilled'
import { MessageIcon } from '../svg/Mesage'
import { UserFilled } from '../svg/UserFilled'
import { UserIcon } from '../svg/User'
import { ReleaseIcon } from '../svg/Release'

export default function TabBarIcon({ color, focused, size, name }: {
  size: number,
  color: string,
  focused: boolean,
  name: IconName
}) {

  const roleIconMap: Record<IconName, React.ReactNode> = {
    [IconName.HOME]: focused ? <HomeFilled size={size} /> : <HomeIcon size={size} />,
    [IconName.CIRCLE]: focused ? <CircleFilled size={size} /> : <CircleIcon size={size} />,
    [IconName.USER]: focused ? <UserFilled size={size} /> : <UserIcon size={size} />,
    [IconName.MESSAGE]: focused ? <MessageFilled size={size} /> : <MessageIcon size={size} />,
    [IconName.RELEASE]: focused ? <ReleaseIcon size={size} /> : <ReleaseIcon size={size} />
  }

  return (
    <View>
      {roleIconMap[name]}
    </View>
  )
}