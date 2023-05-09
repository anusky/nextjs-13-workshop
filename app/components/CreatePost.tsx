import { cookies } from 'next/headers';

import React from 'react'

const saveToDb = async (data: unknown )=>{
    return new Promise((resolve) => {
        resolve('post saved into db')
    })
}

const CreatePost = () => {
    async function addItem(data: unknown) {
        'use server';
     
        const cartId = cookies().get('cartId')?.value;
        await saveToDb({  data });
      }
     
      return (
        <form action={addItem}>
          <button type="submit">Add to Cart</button>
        </form>
      );
}

export default CreatePost