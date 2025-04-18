import {createClient} from '@supabase/supabase-js'

const URL = 'https://odqbonmrwosnrjadbvpo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kcWJvbm1yd29zbnJqYWRidnBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MDEzNjEsImV4cCI6MjA2MDI3NzM2MX0.G8PwZ7imKvOYOQtTeyflhaHh4SXm3wjpXIB00IssLXA';

export const supabase = createClient(URL, API_KEY);
