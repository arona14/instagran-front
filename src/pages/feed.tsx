import React from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'

export const Feed: React.FC = () => {
    return <nav className="bg-slate-200 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex justify-center items-center">
                <Header>
                    <Search/>
                </Header>
            </div>
        </div>
    </nav>
}
