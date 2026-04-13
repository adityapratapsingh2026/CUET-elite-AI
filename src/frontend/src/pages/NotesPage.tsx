import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  Search,
  Tag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { notes } from "../data/notes";
import type { NoteItem } from "../types";

// ─── Constants ───────────────────────────────────────────────────────────────

type SubjectFilter =
  | "all"
  | "English"
  | "BusinessStudies"
  | "Accounts"
  | "Maths"
  | "GeneralTest";

const SUBJECTS: { id: SubjectFilter; label: string }[] = [
  { id: "all", label: "All Subjects" },
  { id: "English", label: "English" },
  { id: "BusinessStudies", label: "Business Studies" },
  { id: "Accounts", label: "Accounts" },
  { id: "Maths", label: "Maths" },
  { id: "GeneralTest", label: "General Test" },
];

const SUBJECT_COLORS: Record<string, string> = {
  English: "border-blue-500/40 text-blue-400 bg-blue-500/10",
  BusinessStudies: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
  Accounts: "border-violet-500/40 text-violet-400 bg-violet-500/10",
  Maths: "border-rose-500/40 text-rose-400 bg-rose-500/10",
  GeneralTest: "border-accent/40 text-accent bg-accent/10",
};

const SUBJECT_LABEL: Record<string, string> = {
  English: "English",
  BusinessStudies: "Business",
  Accounts: "Accounts",
  Maths: "Maths",
  GeneralTest: "GAT",
};

const BOOKMARKS_KEY = "cuet_elite_bookmarks";

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function saveBookmarks(ids: Set<string>) {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...ids]));
}

// ─── Highlight key terms ─────────────────────────────────────────────────────

function highlightTerms(text: string, keyTerms: string[]): React.ReactNode {
  if (!keyTerms.length) return text;
  const escaped = keyTerms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isMatch = keyTerms.some(
      (t) => t.toLowerCase() === part.toLowerCase(),
    );
    const key = `${part.slice(0, 8)}-${i}`;
    return isMatch ? (
      <mark
        key={key}
        className="bg-accent/25 text-foreground rounded px-0.5 font-semibold"
      >
        {part}
      </mark>
    ) : (
      part
    );
  });
}

// ─── Full Note Panel ──────────────────────────────────────────────────────────

interface NotePanelProps {
  note: NoteItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onClose: () => void;
}

function NotePanel({
  note,
  isBookmarked,
  onToggleBookmark,
  onClose,
}: NotePanelProps) {
  // Key terms: extract capitalized phrases and important words from keyPoints as highlights
  const keyTerms = useMemo(() => {
    const raw =
      note.keyPoints
        .join(" ")
        .match(/[A-Z][a-zA-Z]{3,}/g)
        ?.filter((w) => w.length > 4) ?? [];
    return [...new Set(raw)].slice(0, 8);
  }, [note.keyPoints]);

  return (
    <motion.div
      aria-modal="true"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 260 }}
      className="fixed inset-y-0 right-0 w-full sm:w-[520px] lg:w-[600px] z-50 flex flex-col overflow-hidden"
      aria-label={`Note: ${note.title}`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close note panel"
        className="fixed inset-0 bg-background/80 backdrop-blur-sm -z-10 cursor-default"
        onClick={onClose}
      />
      {/* Panel body */}
      <div className="relative flex flex-col h-full glass-gold bg-card/95 shadow-2xl border-l border-accent/20">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-5 border-b border-border bg-card/80">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium ${SUBJECT_COLORS[note.subject]}`}
              >
                {SUBJECT_LABEL[note.subject]}
              </span>
              <span className="text-xs text-muted-foreground">
                {note.topic}
              </span>
            </div>
            <h2 className="font-display font-bold text-lg leading-tight text-foreground">
              {note.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleBookmark(note.id)}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark note"}
              data-ocid="note-panel-bookmark"
              className={`p-2 rounded-lg border transition-smooth ${isBookmarked ? "border-accent/50 bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/30 hover:text-accent"}`}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              data-ocid="note-panel-close"
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-smooth"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Full content */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Overview
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {highlightTerms(note.content, keyTerms)}
            </p>
          </section>

          {/* Key Points */}
          <section>
            <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-4 h-px bg-accent/50 inline-block" />
              Quick Revision Points
            </h3>
            <div className="space-y-2.5">
              {note.keyPoints.map((pt, i) => (
                <div
                  key={`kp-${note.id}-${i}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/40 border border-border/50"
                >
                  <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-xs text-accent font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground leading-snug">
                    {highlightTerms(pt, keyTerms)}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Terms */}
          {keyTerms.length > 0 && (
            <section>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                Key Terms
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {keyTerms.map((term) => (
                  <span
                    key={term}
                    className="text-xs px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/30 text-accent font-medium"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Note Card ────────────────────────────────────────────────────────────────

interface NoteCardProps {
  note: NoteItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpen: (note: NoteItem) => void;
  index: number;
}

function NoteCard({
  note,
  isBookmarked,
  onToggleBookmark,
  onOpen,
  index,
}: NoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
    >
      <GlassCard
        hoverable
        className="group overflow-hidden cursor-pointer"
        data-ocid={`note-card-${note.id}`}
      >
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium ${SUBJECT_COLORS[note.subject]}`}
              >
                {SUBJECT_LABEL[note.subject]}
              </span>
              <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full border border-border/50">
                {note.topic}
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(note.id);
              }}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
              data-ocid={`bookmark-${note.id}`}
              className={`p-1.5 rounded-lg border transition-smooth shrink-0 ${isBookmarked ? "border-accent/40 text-accent bg-accent/10" : "border-transparent text-muted-foreground hover:border-accent/30 hover:text-accent opacity-0 group-hover:opacity-100"}`}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-3.5 h-3.5" />
              ) : (
                <Bookmark className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <button
            type="button"
            className="w-full text-left"
            onClick={() => onOpen(note)}
          >
            <h3 className="font-display font-semibold text-foreground text-base mb-1.5 group-hover:text-accent transition-colors duration-200 leading-snug">
              {note.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {note.content}
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-accent/70 font-medium">
              <BookOpen className="w-3 h-3" />
              <span>{note.keyPoints.length} key points</span>
            </div>
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function NotesPage() {
  const [activeSubject, setActiveSubject] = useState<SubjectFilter>("all");
  const [search, setSearch] = useState("");
  const [selectedNote, setSelectedNote] = useState<NoteItem | null>(null);
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks);

  // Close panel on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedNote(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function toggleBookmark(id: string) {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveBookmarks(next);
      return next;
    });
  }

  // Count per subject
  const subjectCounts = useMemo(() => {
    const map: Record<string, number> = { all: notes.length };
    for (const n of notes) {
      map[n.subject] = (map[n.subject] ?? 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    return notes.filter((n) => {
      if (activeSubject !== "all" && n.subject !== activeSubject) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.topic.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeSubject, search]);

  const bookmarkedNotes = useMemo(
    () => notes.filter((n) => bookmarks.has(n.id)),
    [bookmarks],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold mb-4">
              <BookOpen className="w-3 h-3" />
              {notes.length} Curated Notes
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
              Study <span className="text-accent gold-glow">Notes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Curated CUET preparation notes for all subjects — concise,
              structured, and exam-ready
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Bookmarked Section */}
        <AnimatePresence>
          {bookmarkedNotes.length > 0 && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-10"
              data-ocid="bookmarked-section"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookmarkCheck className="w-4 h-4 text-accent" />
                <h2 className="font-display font-semibold text-sm text-accent uppercase tracking-wider">
                  Bookmarked Notes
                </h2>
                <span className="text-xs bg-accent/10 border border-accent/30 text-accent px-2 py-0.5 rounded-full">
                  {bookmarkedNotes.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookmarkedNotes.map((note, i) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    isBookmarked
                    onToggleBookmark={toggleBookmark}
                    onOpen={setSelectedNote}
                    index={i}
                  />
                ))}
              </div>
              <div className="mt-6 border-t border-border" />
            </motion.section>
          )}
        </AnimatePresence>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-6"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            placeholder="Search notes by title, topic, or keyword…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-ocid="notes-search"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-smooth text-sm"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Subject Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
          data-ocid="subject-tabs"
        >
          {SUBJECTS.map((s) => (
            <button
              type="button"
              key={s.id}
              onClick={() => setActiveSubject(s.id)}
              data-ocid={`tab-${s.id}`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeSubject === s.id
                  ? "border-accent bg-accent/10 text-accent shadow-sm shadow-accent/10"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {s.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeSubject === s.id
                    ? "bg-accent/20 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {subjectCounts[s.id] ?? 0}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Results info */}
        <div className="flex items-center gap-2 mb-5">
          <BookOpen className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "note" : "notes"} found
            {search && (
              <span className="ml-1">
                for{" "}
                <span className="text-foreground font-medium">"{search}"</span>
              </span>
            )}
          </span>
        </div>

        {/* Notes Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((note, i) => (
              <NoteCard
                key={note.id}
                note={note}
                isBookmarked={bookmarks.has(note.id)}
                onToggleBookmark={toggleBookmark}
                onOpen={setSelectedNote}
                index={i}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
            data-ocid="notes-empty"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              No notes found
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              No notes match "{search}". Try a different keyword.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveSubject("all");
              }}
              data-ocid="notes-empty-reset"
              className="text-sm text-accent hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Slide-out Note Panel */}
      <AnimatePresence>
        {selectedNote && (
          <NotePanel
            note={selectedNote}
            isBookmarked={bookmarks.has(selectedNote.id)}
            onToggleBookmark={toggleBookmark}
            onClose={() => setSelectedNote(null)}
          />
        )}
      </AnimatePresence>

      {/* Back to top button when panel is open */}
      <AnimatePresence>
        {selectedNote && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNote(null)}
            aria-label="Back to notes"
            data-ocid="note-back"
            className="fixed bottom-6 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground shadow-lg hover:border-accent/40 transition-smooth z-50 sm:hidden"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Notes
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
