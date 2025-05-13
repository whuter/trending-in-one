import { weiboSearch } from "./weibo-search.ts";
import { toutiaoSearch } from "./toutiao-search.ts";
import { zhihuVideo } from "./zhihu-video.ts";
import { zhihuQuestions } from "./zhihu-questions.ts";
import { zhihuSearch } from "./zhihu-search.ts";

export async function init() {
  await weiboSearch();
  await toutiaoSearch();
  await zhihuVideo();
  await zhihuQuestions();
  // await zhihuSearch(); TODO: API update
}

init();
