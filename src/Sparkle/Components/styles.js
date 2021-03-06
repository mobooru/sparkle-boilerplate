export const shadow = {
  boxShadow: '0px 1px 9px 0px rgba(0, 0, 0, 0.06)',
  hover: { boxShadow: '0px 3px 12px 0px rgba(0, 0, 0, 0.1), 0px 1px 6px 0px rgba(0, 0, 0, 0.06)' },
  deep: {
    boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.1)',
    hover: {}
  }
}

export const card = {
  padding: '12px 18px',
  maxWidth: 700,
  width: 'calc(100vw - 16px)',
  borderRadius: 12,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 24,
  title: {
    fontWeight: 300,
    margin: '6px 0px'
  }
}

export const image = {
  position: 'relative',
  overflow: 'hidden',
  image: (contain, blur, scaleIn, transitionSpeed) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    objectFit: contain ? 'contain' : 'cover',
    filter: blur > 0 && `blur(${blur}px)`,
    transform: scaleIn && `scale(${scaleIn}) translateZ(0px)`,
    willChange: 'opacity, filter, transform',
    transition: transitionSpeed > 0 ? `opacity ${transitionSpeed}ms, filter ${transitionSpeed}ms, transform ${transitionSpeed}ms` : 'none'
  }),
  loaded: {
    filter: `blur(0px)`,
    transform: `scale(1)`
  }
}

export const particleField = {
  height: '100%',
  width: '100%',
  position: 'relative',
  canvas: {
    position: 'absolute'
  }
}

export const tiltable = {
  container: {
    transform: 'perspective(600px)',
    transformStyle: 'preserve-3d'
  }
}
