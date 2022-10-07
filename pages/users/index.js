import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';

const Users = ({posts}) => {
    return (
        <div>
            
            <div>
                {
                    posts.map(item=><div key={item.id}>
                        <h2><Link href={`/users/${item.id}`}><a>{item.id}. {item.name}</a></Link></h2>
                        <p>{item.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://jsonplaceholder.typicode.com/users`)
    const posts = await res.json()
  
    // Pass data to the page via props
    return { props: { posts } }
  }

Users.getLayout = function getLayout(page) {
    return (
        <>
        <Header/>
        {page}
        </>
    )
}
  
export default Users;