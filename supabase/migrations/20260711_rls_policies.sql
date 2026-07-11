-- =============================================================================
-- Migration: RLS Policies for VELOCT Database
-- Description: Tightens Row Level Security on all four application tables.
--   - anon role: only minimally required access (INSERT for forms, SELECT for public content)
--   - authenticated role: full CRUD access for admin operations
-- =============================================================================

-- 1. Enable RLS on all tables (idempotent; safe to re-run)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs        ENABLE ROW LEVEL SECURITY;

-- 2. Drop ALL existing policies on these tables so we start clean
DO $$
DECLARE
    rec RECORD;
BEGIN
    FOR rec IN
        SELECT policyname, tablename
        FROM pg_policies
        WHERE schemaname = 'public'
          AND tablename IN ('submissions', 'careers', 'blogs', 'jobs')
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I', rec.policyname, rec.tablename);
    END LOOP;
END $$;

-- =============================================================================
-- submissions
--   Public:   INSERT only (contact form)
--   Admin:    SELECT, INSERT, UPDATE, DELETE
-- =============================================================================
CREATE POLICY "submissions_anon_insert"
    ON public.submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "submissions_authenticated_select"
    ON public.submissions
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "submissions_authenticated_insert"
    ON public.submissions
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "submissions_authenticated_update"
    ON public.submissions
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "submissions_authenticated_delete"
    ON public.submissions
    FOR DELETE
    TO authenticated
    USING (true);

-- =============================================================================
-- careers
--   Public:   INSERT only (job applications)
--   Admin:    SELECT, INSERT, UPDATE, DELETE
-- =============================================================================
CREATE POLICY "careers_anon_insert"
    ON public.careers
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "careers_authenticated_select"
    ON public.careers
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "careers_authenticated_insert"
    ON public.careers
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "careers_authenticated_update"
    ON public.careers
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "careers_authenticated_delete"
    ON public.careers
    FOR DELETE
    TO authenticated
    USING (true);

-- =============================================================================
-- blogs
--   Public:   SELECT only (read blog posts)
--   Admin:    SELECT, INSERT, UPDATE, DELETE
-- =============================================================================
CREATE POLICY "blogs_anon_select"
    ON public.blogs
    FOR SELECT
    TO anon
    USING (true);

CREATE POLICY "blogs_authenticated_select"
    ON public.blogs
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "blogs_authenticated_insert"
    ON public.blogs
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "blogs_authenticated_update"
    ON public.blogs
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "blogs_authenticated_delete"
    ON public.blogs
    FOR DELETE
    TO authenticated
    USING (true);

-- =============================================================================
-- jobs
--   Public:   SELECT only (view job listings)
--   Admin:    SELECT, INSERT, UPDATE, DELETE
-- =============================================================================
CREATE POLICY "jobs_anon_select"
    ON public.jobs
    FOR SELECT
    TO anon
    USING (true);

CREATE POLICY "jobs_authenticated_select"
    ON public.jobs
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "jobs_authenticated_insert"
    ON public.jobs
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "jobs_authenticated_update"
    ON public.jobs
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "jobs_authenticated_delete"
    ON public.jobs
    FOR DELETE
    TO authenticated
    USING (true);
