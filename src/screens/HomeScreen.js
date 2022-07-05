import React from 'react'
import UseStateCountA from '../components/UseStateCountA'
import UseStateObject from '../components/UseStateObject'
import UseStateArray from '../components/UseStateArray'
import UseEffectOne from '../components/UseEffectOne'
import UseEffectTwo from '../components/UseEffectTwo'
import ClassLifeCycle from '../components/classLifeCycle'
import UseEffectOnce from '../components/UseEffectOnce'
import UseEffectCleanup from '../components/UseEffectCleanup'
import Logic from '../components/Logic'
import InterverCounter from '../components/InterverCounter'


function HomeScreen() {
  return (
    <div>
      <h2>Home screen</h2>
        {/* <UseStateCountA /> */}
        {/* <UseStateObject /> */}
        {/* <UseStateArray /> */}
        {/* <UseEffectOne /> */}
        {/* <ClassLifeCycle /> */}
        {/* <UseEffectTwo /> */}
        {/* <UseEffectOnce /> */}
        {/* <UseEffectCleanup /> */}
        {/* <Logic /> */}
        <InterverCounter />
       
    </div>
  )
}

export default HomeScreen