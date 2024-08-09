import './App.css';
import { useState } from 'react';
import { FieldInput } from './components/FieldInput/FieldInput';
import { FieldImages } from './components/FieldImages/FieldImages';
import { MyTarget } from './components/modal/modal';

type TList = string[];

function App() {
  const [list, setList] = useState<TList>([]);

  const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    // В поле input выбрали фото и нажали открыть
    const { files } = evt.target;
    if (files) {
      const arrayFiles = [...files];
      const urls = await Promise.all(arrayFiles.map(o => fileToDataUrl(o)));
      setList([
        ...list,
        ...urls,
      ]);
      evt.target.value = '';
    }
  }

  const fileToDataUrl = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', (evt: ProgressEvent<FileReader>) => {
          resolve((evt.currentTarget as unknown as MyTarget).result);
      });
      
      fileReader.addEventListener('error', (evt) => {
        reject(new Error((evt.currentTarget as unknown as MyTarget).error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const clickCross = (url: string) => {
    // Удаление изображения (нажатие на крестик)
    const index = list.indexOf(url);
    const newArray = list.slice();
    newArray.splice(index, 1);
    setList([
      ...newArray,
    ]);
  }

  return (
    <div className='content__task'>
      <FieldInput inviteFiles={handleSelect} />
      <FieldImages array={list} callback={clickCross}/>
    </div>
  )
}

export default App
