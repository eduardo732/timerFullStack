PGDMP         $                y            crono    11.11 (Debian 11.11-0+deb10u1)    11.11 (Debian 11.11-0+deb10u1) 
    V           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            W           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            X           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            Y           1262    16384    crono    DATABASE     w   CREATE DATABASE crono WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'es_CL.UTF-8' LC_CTYPE = 'es_CL.UTF-8';
    DROP DATABASE crono;
             postgres    false            Z           0    0    crono    DATABASE PROPERTIES     +   ALTER DATABASE crono CONNECTION LIMIT = 2;
                  postgres    false    2905            �            1259    16385    times    TABLE     [   CREATE TABLE public.times (
    minutes text,
    seconds text,
    id integer NOT NULL
);
    DROP TABLE public.times;
       public         postgres    false            �            1259    16393    times_id_seq    SEQUENCE     �   CREATE SEQUENCE public.times_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.times_id_seq;
       public       postgres    false    196            [           0    0    times_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.times_id_seq OWNED BY public.times.id;
            public       postgres    false    197            �
           2604    16395    times id    DEFAULT     d   ALTER TABLE ONLY public.times ALTER COLUMN id SET DEFAULT nextval('public.times_id_seq'::regclass);
 7   ALTER TABLE public.times ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196            �
           2606    16403    times times_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.times
    ADD CONSTRAINT times_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.times DROP CONSTRAINT times_pkey;
       public         postgres    false    196           