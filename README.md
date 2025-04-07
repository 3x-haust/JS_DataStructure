# JS_DataStructure

![Contributors](https://img.shields.io/github/contributors/3x-haust/JS_DataStructure?style=flat)
![Forks](https://img.shields.io/github/forks/3x-haust/JS_DataStructure?style=social?style=flat)
[![Stars](https://img.shields.io/github/stars/3x-haust/JS_DataStructure?style=flat&logo=GitHub&color=yellow)](https://github.com/3x-haust/JS_DataStructure/stargazers)
![License](https://img.shields.io/github/license/3x-haust/JS_DataStructure?style=flat)

</br>

학교 데이터 구조(DS) 수업을 기록하는 레포지토리입니다.

# 목차

- [목차](#목차)
- [기여 가이드](#기여-가이드)
  - [브랜치 생성](#브랜치-생성)
    - [브랜치 명명 규칙](#브랜치-명명-규칙)
  - [작업 및 커밋](#작업-및-커밋)
    - [커밋 메시지 규칙](#커밋-메시지-규칙)
    - [커밋 예시](#커밋-예시)
  - [원격 저장소에 푸시](#원격-저장소에-푸시)
  - [풀 리퀘스트 생성](#풀-리퀘스트-생성)
  - [병합](#병합)
- [시작하기](#시작하기)
  - [개요](#개요)
  - [사용 방법](#사용-방법)
- [구현된 알고리즘](#구현된-알고리즘)
  - [수학적 알고리즘](#수학적-알고리즘)
  - [자료구조](#자료구조)
  - [재귀 알고리즘](#재귀-알고리즘)

</br>
</br>

# 기여 가이드

JS_DataStructure는 모든 분들의 기여를 환영합니다!  
아래 단계를 따라 참여해주세요.

## 브랜치 생성

새로운 작업을 시작할 때는 **브랜치**를 생성해주세요. 브랜치는 주로 `feature/{기능명}` 형식으로 이름을 지정합니다.

```bash
# main 브랜치로 전환하고 최신 버전으로 동기화
$ git checkout main
$ git pull origin main

# 새 브랜치 생성 및 전환
$ git checkout -b feature/linked-list
```

### 브랜치 명명 규칙

작업 성격에 따라 브랜치 이름을 지정해주세요.

| 종류 | 설명 | 예시 |
|:---:|:---|:---|
| `feature/` | 새로운 기능 개발 | `feature/stack`, `feature/queue` |
| `fix/` | 버그 수정 | `fix/linked-list-bug`, `fix/sort-function` |
| `docs/` | 문서 수정 (README, 주석 등) | `docs/update-readme`, `docs/comments` |
| `refactor/` | 코드 리팩토링 | `refactor/linked-list`, `refactor/recursion` |
| `test/` | 테스트 코드 추가 및 수정 | `test/binary-search-test` |
| `chore/` | 빌드 업무, 패키지 관리 등 | `chore/update-deps`, `chore/config` |

> **팁**
> 
> 브랜치 이름은 작업 목적을 명확하게 나타내야 합니다.

## 작업 및 커밋

작업 완료 후, 아래 **커밋 컨벤션**에 따라 커밋 메시지를 작성해주세요.

### 커밋 메시지 규칙

| 태그 | 설명 |
|:---:|:---|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 (README, 주석 등) |
| `style` | 코드 포맷팅, 스펠링 수정 등 코드에 영향을 주지 않는 변경 |
| `refactor` | 코드 리팩토링 (동작 변화 없이 내부 로직 개선) |
| `test` | 테스트 코드 추가 및 수정 |
| `chore` | 빌드 업무, 패키지 매니저 설정, 유지보수 작업 등 |

### 커밋 예시
```bash
$ git commit -m "feat: 스택 구현 추가"
$ git commit -m "fix: 연결 리스트 삽입 함수 수정"
$ git commit -m "docs: README에 알고리즘 설명 추가"
```

## 원격 저장소에 푸시

작업 완료 후 브랜치를 원격 저장소에 푸시합니다.

```bash
$ git push origin feature/linked-list
```

## 풀 리퀘스트 생성

- GitHub에서 **풀 리퀘스트**를 생성합니다.
- PR 설명에는 작업 내용을 간략하게 설명해주세요.
- 팀원들과 코드 리뷰를 진행합니다.

## 병합

- 리뷰 완료 및 승인 후, **main 브랜치에 병합**합니다.
- 병합 후에는 항상 로컬 `main` 브랜치를 최신 상태로 유지해주세요.

```bash
$ git checkout main
$ git pull origin main
```

</br>
</br>

# 시작하기

## 개요

이 레포지토리는 JavaScript로 구현한 다양한 데이터 구조와 알고리즘을 포함하고 있습니다. 
학교 데이터 구조(DS) 수업에서 다룬 내용을 기록하고 공유하는 목적으로 만들어졌습니다.

## 사용 방법

각 파일은 독립적인 모듈로 작성되어 있어, 개별적으로 사용하거나 다른 프로젝트에 import하여 활용할 수 있습니다.

```javascript
// 예시: 연결 리스트 사용하기
import { LinkedList } from './LinkedList.mjs';

// 연결 리스트 인스턴스 생성
const list = new LinkedList();
list.insertAt(0, 10);
list.insertAt(1, 20);
```

</br>
</br>

# 구현된 알고리즘

## 수학적 알고리즘

| 파일명 | 설명 | 사용 예시 |
|:---:|:---|:---|
| `euclidean.mjs` | 유클리드 알고리즘으로 두 수의 최대공약수(GCD)를 구함 | `euclidean(78, 66)` |
| `factorial.mjs` | 팩토리얼 계산 (재귀적 방법) | `factorial(5)` |
| `power.mjs` | 거듭제곱 계산 (재귀적 방법) | `pow(2, 5)` |

## 자료구조

| 파일명 | 설명 | 제공 기능 |
|:---:|:---|:---|
| `LinkedList.mjs` | 단방향 연결 리스트 구현 | 노드 생성, 특정 위치에 삽입 |

## 재귀 알고리즘

| 파일명 | 설명 | 사용 예시 |
|:---:|:---|:---|
| `hanoi.mjs` | 하노이 타워 알고리즘 | `p(5)` (하노이 타워의 최소 이동 횟수 계산) |
| `length_of_str.mjs` | 문자열 길이 계산 (재귀적 방법) | `strLength("abcde")` |
| `recursion.mjs` | 재귀 함수 기본 예제 | 1부터 10까지 출력 |
| `sum_of_array.mjs` | 배열의 합 계산 (재귀적 방법) | `sumArray([1, 2, 3, 4, 5])` |