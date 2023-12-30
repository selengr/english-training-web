"use client";

import UICustomizedCombo from "@/components/custom/customized_combo";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Audio from "react-audio-player";


type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

type License = {
  name: string;
  url: string;
}|any;

type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

type Datum = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};



export default function Page() {
  const [definition, setDefinition] = useState<Datum>();


  useEffect(() => {
    async function facilitise() {}
    facilitise();
  }, []);

  const handleSearch = async (word: string) => {

    try {
      // const dynamicData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/word`, { cache: 'no-store' })
      // console.log("data",dynamicData)
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setDefinition({
        license : response.data[0].license,
        meanings: response.data[0].meanings,
        phonetics: response.data[0].phonetics,
        phonetic : response.data[0].phonetic,
        sourceUrls : response.data[0].sourceUrls,
        word: response.data[0].word,


      });
      renderDefinitions()
    } catch (error) {
      console.error(error);
    }
  };




  const renderDefinitions = () => {
    console.log('definition :>> ', definition);
    // console.log('definition.meanings :>> ', definition.meanings);
    
    if (!definition?.word) {
      return (
        <div>
          <Typography variant="h4">Loading...</Typography>
        </div>
      );
    }
    return definition.meanings.map((meaning, index) => (
      <div key={index} className="mb-2">
        <Typography variant="subtitle1">{meaning?.partOfSpeech}</Typography>
        <ul>
          {meaning?.definitions.map((definition, i) => (
            <li key={i}>
              {definition.definition}
              {/* {i < meaning.definitions.length - 1 ? ", " : ""} */}
            </li>
          ))}
        </ul>
      </div>
    ));

  };

  const renderAudioPlayer = () => {
    if (!definition?.phonetics) {
      return null;
    }

    return definition.phonetics.map((audioUrl, index) => (
      <Audio key={index} src={audioUrl.audio} controls className="mb-2" />
    ));
  };

  return (
    <Box>
      <h1>test</h1>
      <Input
        placeholder="Enter the word you want to search for"
        onChange={(event) => handleSearch(event.target.value)}
      />
      {definition?.word && (
        <Card>
          <CardHeader>{definition.word}</CardHeader>
          <CardContent>
          
            {renderDefinitions()}
            {renderAudioPlayer()}
          </CardContent>
        </Card>
      )}

    </Box>
  );
}
