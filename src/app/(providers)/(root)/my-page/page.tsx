"use client"
import { Provider } from 'react-redux';
import MyPageForm from './_components/MyPageForm/MyPageForm'
import store from '../../store';
import { AppProps } from 'next/app';

function MyPage({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <MyPageForm />
    </Provider>
  )
}

export default MyPage;