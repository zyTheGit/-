---
title: git
editLink: true
---

# Git 基本命令

## 本地创建分支并切换到 test分支
```bash
git checkout -b test
```

## 创建远程dev分支，将本地test分支与远程dev关联
```
git push origin test:dev
```

## 删除远程dev分支
```
git push orign --delete dev
```

## 分支下载提速
下载的时候加个 `--single-branch` 是下载单个分支， `--depth=1` 是下载单个 `commit`， 这样速度会快几十倍，是个有用的加速小技巧
```bash
git clone --depth=1 --single-branch git@github.com:ant-design/ant-design.git
```

## 本地拉取远程某个分支（本地有多个远程分支的情况）

创建在本地创建local_dev 名称的分支并切换到该分支，并指定当前分支拉取的是远程 dev分支
```bash
git checkout -b local_dev origin/dev 
```

## 本地分支(dev)与远程分支(dev)关联
```bash
git branch --set-upstream dev origin/dev 
```
或者
关联当前分支与远程分支（dev）
```bash
git branch -u origin/dev
```

## 撤销本地分支与远程分支的映射关系
```bash
git branch --unset-upstream
```

## 查看本地分支与远程分支关联
```bash
git branch -vv
```

## 本地`dev`和`feature-dev`(同步)分支

当本地`dev`分支获取远程分支，`feature-dev`分支同步操作
1. 在本地`dev`分支获取远程最新分支代码
```bash
git pull origin dev
```
```bash
# 1. 切换到`feature-dev`分支
git checkout feature-dev
# 2. 如果`feature-dev`分支有修改，需先提交到暂存区
git add . && git commit -m 'feature:修改内容提交'
# 3. 同步本地`dev`分支到`feature-dev`
git rebase dev
```

## 本地`feature-dev`与远程`feature-dev` 冲突

如果本地`feature-dev`与远程`feature-dev` 有冲突，想以本地为主的话，可执行如下操作，强制替换远程分支
```bash
git push origin feature-dev --force
```

## 本地还原远程分支上一个版本
```bash
git reset --soft HEAD^
```

## 本地修改分支名称
```bash
git branch -m oldName newName
```

## 本地查看远程地址
```bash
git remote -v
```

## 本地上传远程地址或者变更
```bash
git remote add origin https://gitee.com/ajiu_skp/aa.git
git push -u origin "master"
```