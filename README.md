# 잼무비

## 1. 프로젝트 명: 잼무비

> **🔗 배포 URL:** [https://jamovie.netlify.app/](https://jamovie.netlify.app/)

```jsx
🟥  인기, 높은 평점, 개봉 예정 영화를 볼 수 있습니다.

🟨  영화 상세페이지에서 줄거리, 평점, 장르, 상영시간, 리뷰, 비슷한 영화, 추천 영화를 소개합니다.

🟩  필터를 통해 원하는 영화를 검색할 수 있습니다.

🟦  영화명, 연도별, 평점, 장르별로 검색할 수 있습니다.
```

## 2. 개발 환경

### ⚙️   사용기술 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### 배포
<img src="https://img.shields.io/badge/-netflify-blue">

## 3. 핵심기능 시연

| 홈화면                                                 | 회원가입                                                             |
| ------------------------------------------------------ | -------------------------------------------------------------------- |
| ![홈화면](/ReadmeGif/홈화면.gif)                       | ![캐러셀](/ReadmeGif/캐러셀.gif) |
| 영화요약                                               | 영화디테일                                                          |
| ![영화요약](/ReadmeGif/영화요약.gif)                   | ![영화 디테일](/ReadmeGif/영화디테일.gif)                        |
| 영화리뷰                                               | 필터링                                                             |
| ![영화리뷰](/ReadmeGif/영화리뷰.gif)                    | ![필터링](/ReadmeGif/필터링.gif)                    |


## 4. 주요코드

### 4.1 **API**
<hr>
fetch보다 더 많은 기능을 제공하는 Axios를 활용하였습니다.
<br>
디버깅하기 원할하게 interceptor를 사용하였습니다.


```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
```
### 4.2 **Redux**
<hr>
상태관리를 위해서 Redux를 활용하였습니다.
<br>


### 4.3 **최적화**
<hr>
최적화를 위해서 useRef와 useCallback을 사용하였습니다.

```jsx
  useEffect(() => {
    if (isMounted.current) {
      getMovieKeyForBanner();
    } else {
      isMounted.current = true;
    }
  }, [popularMoviesData.results]);
```

```jsx
const lastMovieElementRef = useCallback(
    (node) => {
      if (moreMoviesDataLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [moreMoviesDataLoading, hasMore]
  );
  ```


## 5. 프로젝트 후기

### 아쉬운점
- 툴킷을 사용 하려했는데 조금 미숙해서 도중에 기존 리덕스로 변경하였다.
- 잦은 오타로인해서 오타 찾는데만 며칠이 걸렸다.
- 문서화를 많이 안해둠
- CSS가 조금 미숙했다.

### 잘한점
- 외부 라이브러리를 많이 사용해보고자 했다. (리덕스, 부트스트랩, 캐러셀, 리액트유튜브, mui 등등)
- 결국 마무리는 했다.
