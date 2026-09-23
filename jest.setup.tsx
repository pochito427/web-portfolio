import '@testing-library/jest-dom'
import React from 'react'

const mockReplace = jest.fn()
const mockRouter = { replace: mockReplace }

jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({ fill, priority, quality, ...props }: any) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => mockRouter),
  usePathname: jest.fn(() => '/en'),
  useParams: jest.fn(() => ({ locale: 'en' })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}))

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide">{children}</div>,
}))

jest.mock('swiper/modules', () => ({
  EffectCoverflow: {},
  Pagination: {},
}))

jest.mock('react-social-icons', () => ({
  SocialIcon: function MockSocialIcon(props: any) {
    const { as: Component = 'span', network, ...rest } = props
    return <Component data-testid="social-icon" data-network={network} {...rest} />
  },
}))
