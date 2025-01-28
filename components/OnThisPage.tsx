"use client"
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'
interface LinkTypes{
  id: string
  text: string
}
function OnThisPage({htmlContent, className}: {htmlContent: string, className: string}) {
  const [links, setLinks] = useState<null | LinkTypes[]>(null);

  useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;
    const headings = temp.querySelectorAll('h2, h3');
    const generatedLinks:LinkTypes[] = [];
    headings.forEach((heading, index)=>{
      const id = heading.id || `heading-${index}`;
      heading.id = id;
       generatedLinks.push({
        id:id,
        text:(heading as HTMLElement).innerText
       })
    })
    setLinks(generatedLinks);
  }, [htmlContent])
  return (
    <div className={cn('hidden md:block', className)}>
      <div className='sticky top-20'>
        <h2 className='text-lg font-bold'>On This Page</h2>
        <ul className='not-prose'>
          {links?.map((link)=>(
            <li key={link.id} className='pt-1'>
              <a href={`#${link.id}`}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OnThisPage