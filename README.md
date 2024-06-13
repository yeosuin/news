# News

###### URL로 HTML을 가지고 와서 HTML 중 가지고 오고 싶은 부분을 추출 및 치환을 해 준다.

뉴스 페이지에 있는 HTML을 가지고 올 때 사용하기 위하여 만들었다.



HTML → 추출 → 치환



![](https://github.com/yeosuin/news/assets/103043510/d7e42343-421a-4fec-b886-a69b6fe7e903)

추출 정규식 예) <title>(?<text>.*?)</title>

치환 정규식 예)^(\s)+|<div(.+?)</div>|</?[a-zA-Z](\w)*[^<>]*/?>(\s)*|<!\-\-[\s\S]*?\-\->|\[(.+?)\](\s)*|&#?(\w)+;?|[\r\n\t"'"‘’“”]


[위 파일 다운로드 링크](https://drive.google.com/file/d/1E_yFoZae_iYtz2bJ2UthbMX9EnNBdDj2/view?usp=sharing)
