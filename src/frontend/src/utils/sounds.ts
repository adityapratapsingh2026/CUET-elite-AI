let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

function playTone(
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  gain = 0.3,
) {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      frequency * 0.8,
      ctx.currentTime + duration,
    );

    gainNode.gain.setValueAtTime(gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration,
    );

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch {
    // Silently fail if audio context is not available
  }
}

export function playCorrect(): void {
  // Pleasant ascending chime
  playTone(523.25, 0.15, "sine", 0.25);
  setTimeout(() => playTone(659.25, 0.15, "sine", 0.25), 120);
  setTimeout(() => playTone(783.99, 0.2, "sine", 0.3), 240);
}

export function playWrong(): void {
  // Descending buzzer
  playTone(440, 0.1, "sawtooth", 0.2);
  setTimeout(() => playTone(369.99, 0.1, "sawtooth", 0.2), 100);
  setTimeout(() => playTone(311.13, 0.2, "sawtooth", 0.15), 200);
}

export function playLevelUp(): void {
  // Triumphant fanfare
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.2, "sine", 0.35), i * 150);
  });
}

export function playClick(): void {
  playTone(800, 0.05, "sine", 0.1);
}
