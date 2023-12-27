"use client"

import UICustomizedCombo from "@/components/custom/customized_combo";
import { Box, Button, Card, CardContent, CardHeader, Input, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Audio from 'react-audio-player';

export default function Page() {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState({
      word: '',
      phonetic: '',
      meanings: [],
      audioUrls: [],
    });

    // const staticData = await fetch(`https://...`, { cache: 'force-cache' })
    // const dynamicData = await fetch(`https://...`, { cache: 'no-store' })
    // const revalidatedData = await fetch(`https://...`, {
    //   next: { revalidate: 10 },
    // })



useEffect(()=>{
    async function facilitise(){
        
    }
    facilitise()
},[])


const handleSearch = (word:string) => {
    const splitWord = word.toLowerCase().split(' ');
    
    // const url = `/dictionary/${splitWord.join('+')}`;
    // router.push(url);

    try {
        // const dynamicData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/word`, { cache: 'no-store' })
        // console.log("data",dynamicData)
           const response =  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/word`);
           console.log(response)
    } catch (error) {
        console.error(error);
    }
  };


const handleDefinitionChange = (data) => {
    setDefinition(data);
  };

  const renderDefinitions = () => {
    if (!definition.word) {
      return (
        <div>
          <Typography variant="h4">Loading...</Typography>
        </div>
      );
    }

    return definition.meanings.map((meaning, index) => (
      <div key={index} className="mb-2">
        <Typography variant="subtitle1">
          {meaning.partOfSpeech}
        </Typography>
        <ul>
          {meaning.definitions.map((definition, i) => (
            <li key={i}>
              {definition}
              {i < meaning.definitions.length - 1 ? ', ' : ''}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const renderAudioPlayer = () => {
    if (!definition.audioUrls) {
      return null;
    }

    return definition.audioUrls.map((audioUrl, index) => (
      <Audio
        key={index}
        src={audioUrl}
        controls
        className="mb-2"
      />
    ));
  };

    
   
    return (
        <Box>
          <h1>test</h1>
          <Input
            placeholder="Enter the word you want to search for"
            onChange={(event) => setWord(event.target.value)}
          />
          {/* <Button type="submit" onClick={handleSearch}>Search</Button> */}
          {word &&
            <Card>
              <CardHeader>{definition.word}</CardHeader>
              <CardContent>ss
                {renderDefinitions()}
                {renderAudioPlayer()}
              </CardContent>
            </Card>}

            <UICustomizedCombo

            placeholder={'جستجوی اعتبار'}
            label="لطفا اعتبارات خود را انتخاب نمائید"

          />
        </Box>
      );
  }