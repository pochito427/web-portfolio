import React from 'react';
import { render, screen, fireEvent } from '../../tests/test-utils';
import Navbar from '@/components/Navbar';


describe('Navbar', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = jest.fn();
  });

  const setup = () => {
    const homeRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const aboutRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const projectsRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const skillsRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const contactRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    render(
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
    );
    return { homeRef, aboutRef, projectsRef, skillsRef, contactRef };
  };

  it('renders a skip link to main content', () => {
    setup();
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders navigation links for each section', () => {
    setup();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('scrolls to each section when a nav link is clicked', () => {
    const refs = setup();
    const sections: { name: string; ref: keyof typeof refs }[] = [
      { name: 'Home', ref: 'homeRef' },
      { name: 'About', ref: 'aboutRef' },
      { name: 'Projects', ref: 'projectsRef' },
      { name: 'Skills', ref: 'skillsRef' },
      { name: 'Contact', ref: 'contactRef' },
    ];
    sections.forEach(({ name, ref }) => {
      const link = screen.getAllByText(name)[0];
      fireEvent.click(link);
      expect(refs[ref].current?.scrollIntoView).toHaveBeenCalled();
    });
  });

  it('falls back to hash navigation when a ref is not available', () => {
    const originalHash = window.location.hash;
    const homeRef = { current: null } as React.RefObject<HTMLDivElement | null>;
    const aboutRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const projectsRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const skillsRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    const contactRef = { current: document.createElement('div') } as React.RefObject<HTMLDivElement | null>;
    render(
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
    );
    const homeLink = screen.getAllByText('Home')[0];
    fireEvent.click(homeLink);
    expect(window.location.hash).toBe('#home-section');
    window.location.hash = originalHash;
  });

  it('toggles the mobile menu and updates aria attributes', () => {
    setup();
    const toggler = screen.getByLabelText('Open menu');
    expect(toggler).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggler);
    expect(screen.getByLabelText('Close menu')).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('mobile-navigation')).toBeInTheDocument();
  });

  it('closes the mobile menu with the Escape key', () => {
    setup();
    const toggler = screen.getByLabelText('Open menu');
    fireEvent.click(toggler);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.getByLabelText('Open menu')).toHaveAttribute('aria-expanded', 'false');
  });
});
