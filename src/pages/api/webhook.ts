import type { APIRoute } from 'astro';
import axios from 'axios';
import { BuildConverter } from '../../script/buildConverter.ts';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const callBackData = new BuildConverter(body);
  await axios
    .post(
      'https://hooks.slack.com/services/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',
      {
        blocks: callBackData.convert.blocks,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => {
      console.log('response', res);
    })
    .catch((err) => {
      console.log(err);
    });

  return new Response(
    JSON.stringify({
      message: body,
    }),
  );
};
