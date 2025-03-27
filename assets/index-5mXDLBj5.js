(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const l={isLoggedIn:localStorage.getItem("isLoggedIn")==="true",user:JSON.parse(localStorage.getItem("user")),subscribers:[],subscribe(e){this.subscribers.push(e)},setUserInfo(e){this.user=e,e?localStorage.setItem("user",JSON.stringify(e)):localStorage.removeItem("user"),this.notify()},setIsLoggedIn(e){this.isLoggedIn=e,localStorage.setItem("isLoggedIn",e),this.notify()},notify(){this.subscribers.forEach(e=>e())}},u=()=>{const e=document.createElement("header");e.classList.add("bg-blue-600","text-white","p-4","sticky","top-0");const o=window.location.pathname,r=t=>t===o?"text-blue-600 font-bold":"text-gray-600",s=()=>{const t="/front_5th_chapter1-1";e.innerHTML=`
      <h1 class="text-2xl font-bold">항해플러스</h1>
      <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
          ${l.isLoggedIn?`
              <li><a href="${t}/" class="${r("/")}">홈</a></li>
              <li><a href="${t}/profile" class="${r("/profile")}">프로필</a></li>
              <li><a href="${t}/login" id="logout" class="text-gray-600">로그아웃</a></li>
              `:`
              <li><a href="${t}/" class="${r("/")}">홈</a></li>
              <li><a href="${t}/login" class="${r("/login")}">로그인</a></li>
              `}
          </ul>
      </nav>
  `};return s(),l.subscribe(s),e},b=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    `,m=()=>{const e=document.createElement("div");return e.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u().outerHTML}
        <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
      
        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
      ${b()}
    </div>
  </div>
`,e},f=()=>{const e=document.createElement("div");return e.innerHTML=`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
    `,e.querySelector("#login-form").addEventListener("submit",o=>{var s;o.preventDefault(),l.setIsLoggedIn(!0),l.setUserInfo({username:(s=e.querySelector("#username"))==null?void 0:s.value,email:"",bio:""}),window.history.pushState({},"","/front_5th_chapter1-1/"),l.notify(),i()}),e},p=()=>{if(!l.isLoggedIn){window.history.pushState({},"","/login");return}const e=document.createElement("div");e.classList.add("root");const o=()=>{var r,s,t;e.innerHTML=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u().outerHTML}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="홍길동"
                  value="${(r=l.user)==null?void 0:r.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="hong@example.com"
                  value="${(s=l.user)==null?void 0:s.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  placeholder="안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다."
                  class="w-full p-2 border rounded"
                >
${(t=l.user)==null?void 0:t.bio}</textarea
                >
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${b()}
      </div>
    </div>
    `};return o(),l.subscribe(o),e},c=()=>`
        <main class="bg-gray-100 flex items-center justify-center min-h-screen">
            <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
            <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
            <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
            <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
            <p class="text-gray-600 mb-8">
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
            <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
                홈으로 돌아가기
            </a>
            </div>
        </main>
    `,d="/front_5th_chapter1-1",g={[`${d}/`]:m,[`${d}/login`]:f,[`${d}/profile`]:p},i=e=>{const r=typeof e>"u"||typeof e=="object"?window.location.pathname:e==null?void 0:e.toString().slice(1),s=document.body.querySelector("#root");if(!s){console.error("Root not found");return}const t=g[r];if(!t){s.innerHTML=c();return}if(r==="/login"&&l.isLoggedIn){window.history.pushState({},"","/"),i();return}if(r==="/profile"&&!l.isLoggedIn){window.history.pushState({},"","/login"),i();return}s.innerHTML="",s.appendChild((t==null?void 0:t())||c())};window.addEventListener("popstate",i);const h=()=>{i()};h();window.addEventListener("click",e=>{e.target.id==="logout"&&(l.setIsLoggedIn(!1),l.setUserInfo(null),l.notify(),i())});window.addEventListener("submit",e=>{var o,r,s;e.target.id==="profile-form"&&(l.setUserInfo({username:(o=document.querySelector("#username"))==null?void 0:o.value,email:(r=document.querySelector("#email"))==null?void 0:r.value,bio:(s=document.querySelector("#bio"))==null?void 0:s.value}),l.notify())});window.addEventListener("hashchange",()=>{var o;const e=(o=window.location.hash)==null?void 0:o.toString();i(e)});
