# React 日常问题总结

## React + Class + dva 
`ref`无法透传问题，针对`class` 组件式

```tsx

// 父组件
<Role ref={roleRef} />

// 子组件
export default connect(mapProps, null, null, { forwardRef: true })(Role);
```