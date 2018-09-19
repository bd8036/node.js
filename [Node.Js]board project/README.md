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
1. Description : 게시판 전체 목록을 리턴한다.
   Input      : (GET) /
   Url        : http://localhost:3000
   Output    : 

{    "success": true,
    "data": [
        {   "views": 0,
            "board_date": "2018-09-19T01:48:18.485Z",
            "_id": "5ba1ab0936d98f2214f062b3",
            "comments": [],
            "title": "Restful test",
            "contents": "테스트 중입니다.",
            "author": "최별이",
            "__v": 0,
            "id": "5ba1ab0936d98f2214f062b3" }]}

-------------------------------------------------------------------------------------------------------

2. Description : id값의 게시판을 리턴한다.
   Input      : (GET) /board/:id
   Url        : http://localhost:3000/board/5ba1ab0936d98f2214f062b3
   Output    : 

{    "success": true,
    "data": {
        "views": 2,
        "board_date": "2018-09-19T01:48:18.485Z",
        "_id": "5ba1ab0936d98f2214f062b3",
        "comments": [],
        "title": "Restful test",
        "contents": "테스트 중입니다.",
        "author": "최별이",
        "__v": 0,
        "id": "5ba1ab0936d98f2214f062b3" }}

3. Description : 수정하기 페이지를 리턴한다.
   Input      : (GET) /board/:id/edit
   Url        : http://localhost:3000/board/5ba1ab0936d98f2214f062b3/edit
   Output    : 

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






4. Description : 게시글을 새롭게 등록합니다.
   Input      : (POST) /board/write
	{ 
	   "title" : "제목",
	   "contents" : "안녕하세요",
	   "author" : "김민지"
	}
   Url        : http://localhost:3000/board/write
   Output    : 
{    "success": true,
    "data": {
        "views": 0,
        "board_date": "2018-09-19T02:31:58.406Z",
        "_id": "5ba1b5290507593254ff440a",
        "comments": [],
        "title": "제목",
        "contents": "안녕하세요",
        "author": "김민지",
        "__v": 0,
        "id": "5ba1b5290507593254ff440a"
    }
}

5. Description : 댓글을 등록합니다.
   Input      : (POST) /comment/write
	{	
	   "contents" : " 댓글기능 테스트 ",
	   "author" : "최미리"
	}
   Url        : http://localhost:3000/comment/write
   Output    :
	 {    "success": true,
   	        "data": null
	  }

6. Description : 게시글의 id값을 찾아 그 게시글을 수정합니다.
   Input      : (PUT) /board/:id
	{    "title" : "수정중입니다",
  	     "contents" : "수정test중입니다.",
   	     "author" : "최진실"
	}
   Url        : http://localhost:3000/board/5ba1ab0936d98f2214f062b3
   Output    :
{    "success": true,
    "data": {
        "views": 16,
        "board_date": "2018-09-19T04:32:57.145Z",
        "_id": "5ba1ab0936d98f2214f062b3",
        "comments": [
            {
                "comment_date": "2018-09-19T02:22:10.946Z",
                "_id": "5ba1b303cf3e6d2cc04fba06",
                "contents": "d",
                "author": "d"
            }
        ],
        "title": "수정중입니다",
        "contents": "수정test중입니다.",
        "author": "최진실",
        "__v": 0,
        "id": "5ba1ab0936d98f2214f062b3"
    }
}

7. Description : 게시글을 삭제합니다.
   Input      : (DELETE) /board/:id
	{    "title" : "수정중입니다",
  	     "contents" : "수정test중입니다.",
   	     "author" : "최진실"
	}
   Url        : http://localhost:3000/board/5ba1b5290507593254ff440a
   Output    :
{    "success": true,
    "data": {
        "n": 1,
        "ok": 1
    }
}
