import React from 'react'
import {ExploreTopCourses} from '../../components/ExploreTopCourses/'
import {BottomContent} from '../../components/BottomContent/'
import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {NewOn} from '../../components/NewOn'
import Main from '../../components/Main'

export default function Home() {
  return (
    <>
    <Header />
    <Main />
    <NewOn />
    <ExploreTopCourses />
    <BottomContent />
    <Footer />
    </>
  );
}
