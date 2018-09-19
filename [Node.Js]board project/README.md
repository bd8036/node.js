# Nodejs-board-project(JavaScript) 2018-09-11
- vscode, nodejs, express, mongodb(mongoose), ejs

* npm module download(npm install --save express) -> npm 모듈 설치는 프로젝트 폴더 안에서 수행
  - express 웹 서버
  - body-parser
  - method-override 
  - ...

* 몽고디비 cmd 연결(몽고디비 설치 폴더로 이동)
  - C:\mongodb\bin> mongod --dbpath "C:\mongodb\data" -> 새로운 cmd 창 열기 ->  C:\mongodb\bin> mongo -> Connect!

* CRUD 구현(O)
* 댓글 기능 구현(O)
* 조회수 기능 구현(?)
* 검색 기능 구현(X)

-------------------------------------------------------------------
* git push : http://emflant.tistory.com/123
* es6 study
* trello, mattermost

--------------------------------------------------------------------
3. Description : 수정하기 페이지를 리턴한다.
   Method      : GET
   URL         : /board/:id/edit
   Test url    : http://localhost:3000/board/5ba1ab0936d98f2214f062b3/edit
   Test output :
  
  {    "success": true,

    "data": {

        "views": 4,

        "board_date": "2018-09-19T01:48:18.485Z",

        "_id": "5ba1ab0936d98f2214f062b3",

        "comments": [],

        "title": "Restful test",

        "contents": "테스트 중입니다.",

        "author": "최별이",

        "__v": 0,

        "id": "5ba1ab0936d98f2214f062b3" }}
