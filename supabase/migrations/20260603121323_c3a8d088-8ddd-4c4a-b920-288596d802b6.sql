DELETE FROM public.form_submissions
WHERE (timing IS NULL OR timing = '')
  AND (amount IS NULL OR amount = '');