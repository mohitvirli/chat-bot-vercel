'use client';

import { useState } from 'react';
import ModelSelector from './components/model-selector';
import Chat from './pages';
import { ModelType } from './models';

export default function Page() {
  const [model, setModel] = useState<ModelType>('OpenAI');

  return (
    <div className='w-full mx-auto stretch'>
      <ModelSelector onChange={setModel}></ModelSelector>
      <Chat model={model}/>
    </div>
    );
}