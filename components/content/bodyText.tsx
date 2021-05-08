import React from 'react';
import { TextArrType, TextType } from '../../lib/types';

type BodyTextProps = { text: TextArrType[] };

export const BodyText = ({ text }: BodyTextProps) => {
  return (
    <>
      {text.map((paragraph: TextArrType) => (
        <div key={`paragraph-${paragraph.length}`}>
          <p>
            {paragraph.map((snippet: TextType, key) =>
              snippet.type === 'strong' ? (
                <b key={`bold-${snippet.content.length}-${key}`}>{snippet.content} </b>
              ) : (
                <span key={`text-${snippet.content.length}-${key}`}>{snippet.content} </span>
              ),
            )}
          </p>
          <br />
        </div>
      ))}
    </>
  );
};
