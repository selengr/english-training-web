"use client";

import UICustomizedCombo from "@/components/custom/customized_combo";
import {
  Box,
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

type License =
  | {
      name: string;
      url: string;
    }
  | any;

type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

export type Datum = {
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
        license: response.data[0].license,
        meanings: response.data[0].meanings,
        phonetics: response.data[0].phonetics,
        phonetic: response.data[0].phonetic,
        sourceUrls: response.data[0].sourceUrls,
        word: response.data[0].word,
      });
      renderDefinitions();
    } catch (error) {
      console.error(error);
    }
  };

  const renderDefinitions = () => {
    console.log("definition :>> ", definition);
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
        <Typography variant="body1" className="text-cyan-800 text-lg pt-6 h-16">
          <span className="text-2xl">synonyms:</span>{" "}
          {meaning?.synonyms.map((item) => {
            return (
              <span
                key={index}
                className="h-9
              px-4 py-1 m-1 bg-blue-950 text-amber-500 rounded-full"
              >
                {item}
              </span>
            );
          })}
        </Typography>
       {meaning?.antonyms.length > 0 && <Typography variant="body1" className="text-cyan-800 text-lg pt-6 h-16">
          <span className="text-2xl">antonyms:</span>{" "}
          {meaning?.antonyms.map((item) => {
            return (
              <span
                key={index}
                className="h-9
              px-4 py-1 m-1 bg-amber-500 text-blue-950 rounded-full"
              >
                {item}
              </span>
            );
          })}
        </Typography>
         }
        <br />
        <hr />
        <Typography variant="subtitle1" className="bg-cyan-100 200 w-28 text-sky-900 text-center rounded-2xl text-xl my-1">
          {meaning?.partOfSpeech}
        </Typography>
   
        <hr />
        <ol>
          {meaning?.definitions.map((definition, i) => (
            <li
              key={i}
              className="rounded-2xl border-2 border-slate-400 m-2 p-3"
            >
              {definition.definition}
              {/* {i < meaning.definitions.length - 1 ? ", " : ""} */}
            </li>
          ))}
        </ol>
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
    <Box className="flex justify-center flex-col">
      {/* <h1 className="px-4 text-center ">search</h1> */}
      {/* <UICustomizedCombo
        //  Words={definition}
      /> */}
      <Input
        className="px-4 m-5 text-xl"
        placeholder="Enter the word you want to search for"
        onChange={(event) => handleSearch(event.target.value)}
      />
      {definition?.word && (
        <>
          <Card>
            <CardHeader className="text-cyan-900 text-xl">
              {definition.word}
            </CardHeader>
            <CardContent>
              <Typography
                className="font-bold"
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
              >
                {definition.word}{" "}
                <span className="text-xl">[{definition.phonetic}]</span>
              </Typography>

              {renderDefinitions()}
              {renderAudioPlayer()}

            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
}
