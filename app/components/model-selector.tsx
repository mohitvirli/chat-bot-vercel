'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AvailableModels, ModelType } from '../models';


export default function ModelSelector({ onChange }: { onChange: Function }) {
  const options = AvailableModels;
  const [selected, setSelected] = useState<ModelType>('OpenAI');

  const onChangeHandler = (val: ModelType) => {
    setSelected(val);
    onChange(val);
  }

  return (<div className="w-full p-8 fixed top-0 z-10">
    <div className="ml-8 w-32">
      <Listbox value={selected} onChange={onChangeHandler}>
       <ListboxButton className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
         <span className="flex items-center">
           <span className="ml-3 block truncate">{selected}</span>
         </span>
         <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
           <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
         </span>
       </ListboxButton>
       <ListboxOptions
         transition
         className="absolute z-10 mt-1 max-h-56 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
       >
         {options.map((option) => (
           <ListboxOption
             key={option}
             value={option}
             className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
           >
             <div className="flex items-center">
               <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                 {option}
               </span>
             </div>

             <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
               <CheckIcon aria-hidden="true" className="h-5 w-5" />
             </span>
           </ListboxOption>
         ))}
       </ListboxOptions>
     </Listbox>
    </div>
   </div>)
}